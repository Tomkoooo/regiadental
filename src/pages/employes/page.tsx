ddimport React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const employees = [
  { id: 1, name: "Dr. Teszt Elek", position: "Fogorvos", email: "teszt.elek@example.com", img: 'image 4547.jpg' },
    { id: 2, name: "Dr. Kovács Anna", position: "Szájsebész", email: "kovacs.anna@example.com", img: 'image 4548.jpg' },
      { id: 3, name: "Dr. Nagy Péter", position: "Ortodontus", email: "nagy.peter@example.com", img: "" }, // No image
      ];

      const E… px-4">{employee.name}</td>
                      {/* Position */}
                                      <td className="py-3 px-4">{employee.position}</td>
                                                      {/* Email */}
                                                                      <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">
                                                                                        <a href={`mailto:${employee.email}`}>{employee.email}</a>
                                                                                                        </td>
                                                                                                                      </tr>
                                                                                                                                  ))}
                                                                                                                                            </tbody>
                                                                                                                                                    </table>
                                                                                                                                                          </div>
                                                                                                                                                              </div>
                                                                                                                                                                  <Footer/>
                                                                                                                                                                      </>
                                                                                                                                                                        );
                                                                                                                                                                        };

                                                                                                                                                                        export default EmployeesPage;