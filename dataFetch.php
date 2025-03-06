<?php
header("Content-Type: application/json");

// Allow CORS (if needed)
header("Access-Control-Allow-Origin: *");

// Check if the "slug" parameter is provided
if (!isset($_GET['slug'])) {
    echo json_encode(["error" => "No treatment slug provided"]);
    exit;
}

// The treatment slug from the URL
$slug = $_GET['slug'];

// Define the source URL where the treatment HTML is located
$source_url = "https://example.com/treatments/" . $slug;

// Fetch the HTML content from the treatment page
$html = file_get_contents($source_url);

// Check if the page was retrieved successfully
if (!$html) {
    echo json_encode(["error" => "Failed to fetch the treatment page"]);
    exit;
}

// Load the HTML using DOMDocument
libxml_use_internal_errors(true);
$dom = new DOMDocument();
$dom->loadHTML($html);
libxml_clear_errors();

// Create an XPath object to search the HTML
$xpath = new DOMXPath($dom);

// Find the specific div (modify the XPath query based on your structure)
$div = $xpath->query("//div[@id='treatment-content']"); // Change ID if needed

if ($div->length > 0) {
    // Extract the inner HTML of the found div
    $innerHTML = "";
    foreach ($div as $node) {
        $innerHTML .= $dom->saveHTML($node);
    }

    echo json_encode([
        "slug" => $slug,
        "content" => $innerHTML
    ]);
} else {
    echo json_encode(["error" => "Treatment content not found"]);
}
?>