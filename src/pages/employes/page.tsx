
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { employees } from "../../assets/utils";

const EmployeesPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center w-full px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Munkatársaink</h1>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-scroll">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 text-left">Profil</th>
              <th className="py-3 px-4 text-left">Név</th>
              <th className="py-3 px-4 text-left">Pozíció</th>
              <th className="py-3 px-4 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                {/* Profile Image */}
                <td className="py-3 px-4">
                  {employee.img ? (
                    <img
                      src={employee.img}
                      alt={employee.name}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                  )  
                  }
                </td>
                {/* Name */}
                <td className="py-3 px-4">{employee.name}</td>
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