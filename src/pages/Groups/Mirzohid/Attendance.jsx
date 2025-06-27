import React from "react";

const Attendance = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-1">Group Information</h2>
      <p className="text-gray-500 mb-6">Showing 5 of 11</p>

      {/* Students Section */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">Students</h3>
        <button className="text-green-700 hover:underline text-sm flex items-center gap-1">
          ✏️ Edit
        </button>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse table-auto">
          <thead className="text-left border-b border-gray-200">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Enrollment Date</th>
              <th className="py-2">Role</th>
              <th className="py-2">Progress</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Jamshid Karimov",
                email: "karimov@gmail.com",
                progress: "w-3/5",
              },
              {
                name: "Dildora Azizova",
                email: "dild123@gmail.com",
                progress: "w-1/3",
              },
              {
                name: "Nigora Mirsagatova",
                email: "mira34@gmail.com",
                progress: "w-4/5",
              },
              {
                name: "Shakhnoza Usmanova",
                email: "shakh049@gmail.com",
                progress: "w-2/5",
              },
              {
                name: "Gulnoza Rahimova",
                email: "rahimis35@gmail.com",
                progress: "w-1/2",
              },
            ].map((student, idx) => (
              <tr key={idx} className="border-b border-gray-100">
                <td className="py-3">{student.name}</td>
                <td className="py-3 text-gray-600">
                  <span className="inline-flex items-center gap-1">
                    📧 {student.email}
                  </span>
                </td>
                <td className="py-3">Jan 15, 2025</td>
                <td className="py-3">Student</td>
                <td className="py-3">
                  <div className="w-32 bg-gray-200 h-2 rounded">
                    <div
                      className={`bg-orange-500 h-2 rounded ${student.progress}`}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Attendance Section */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">Attendance</h3>
        <button className="text-green-700 hover:underline text-sm flex items-center gap-1">
          ✏️ Edit
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse table-auto">
          <thead className="text-left border-b border-gray-200">
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">J.Karimov</th>
              <th className="py-2">D.Azizova</th>
              <th className="py-2">N.Mirsagatova</th>
              <th className="py-2">S.Usmanova</th>
              <th className="py-2">G.Rahimova</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                date: "March 22, 2025",
                data: ["green", "red", "green", "red", "green"],
              },
              {
                date: "March 24, 2025",
                data: ["red", "green", "green", "green", "red"],
              },
              {
                date: "March 26, 2025",
                data: ["green", "green", "green", "red", "green"],
              },
              {
                date: "March 28, 2025",
                data: ["red", "red", "green", "red", "green"],
              },
              {
                date: "March 30, 2025",
                data: ["red", "green", "green", "green", "green"],
              },
            ].map((row, idx) => (
              <tr key={idx} className="border-b border-gray-100">
                <td className="py-2">{row.date}</td>
                {row.data.map((status, i) => (
                  <td
                    key={i}
                    className={`py-2 ${
                      status === "green" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    • {status === "green" ? "Present" : "Absent"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Go Back Button */}
      <div className="mt-6">
        <button className="bg-green-800 text-white px-6 py-2 rounded flex items-center gap-2">
          <span className="rotate-180 inline-block">←</span> Go back
        </button>
      </div>
    </div>
  );
};

export default Attendance;
