import ExcelJS from "exceljs";

export async function downloadExcel(tasks) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Tasks");
  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Task", key: "task", width: 40 },
    { header: "Status", key: "status", width: 20 },
  ];

  tasks.forEach((task) => {
    worksheet.addRow({
      id: task.id,
      task: task.task,
      status: task.status ? "Completed" : "Pending",
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const data = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(data);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "tasks.xlsx");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}