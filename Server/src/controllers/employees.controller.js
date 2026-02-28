// src/controllers/employees.controller.js
const employeesCtrl = {};

employeesCtrl.createEmployee = (req, res) => {
    res.send("Crear Empleado");
}

employeesCtrl.getEmployees = (req, res) => {
    res.send("Obtener Empleados");
}

employeesCtrl.getEmployee = (req, res) => {
    res.send("Obtener Empleado por ID");
}

employeesCtrl.editEmployee = (req, res) => {
    res.send("Editar Empleado");
}

employeesCtrl.deleteEmployee = (req, res) => {
    res.send("Eliminar Empleado");
}

// Exportamos directamente el objeto
module.exports = employeesCtrl;