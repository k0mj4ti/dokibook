import Admin from "./admin";
import Appointment from "./appointment";
import Availability from "./availability";
import Clinic from "./clinic";
import Patient from "./patient";
import Service from "./service";
import Staff from "./staff";

Clinic.hasMany(Appointment, {foreignKey: "clinic_id"})
Appointment.belongsTo(Clinic, {foreignKey: "clinic_id"})

Clinic.hasMany(Availability, {foreignKey: "clinic_id"})
Availability.belongsTo(Clinic, {foreignKey: "clinic_id"})

Clinic.hasMany(Patient, {foreignKey: "clinic_id"})
Patient.belongsTo(Clinic, {foreignKey: "clinic_id"})

Clinic.hasMany(Service, {foreignKey: "clinic_id"})
Service.belongsTo(Clinic, {foreignKey: "clinic_id"})

Clinic.hasMany(Staff, {foreignKey: "clinic_id"})
Staff.belongsTo(Clinic, {foreignKey: "clinic_id"})

Patient.hasMany(Appointment, {foreignKey: "patient_id"})
Appointment.belongsTo(Patient, {foreignKey: "patient_id"})

Staff.hasMany(Availability, {foreignKey: "staff_id"})
Availability.belongsTo(Staff, {foreignKey: "staff_id"})

Staff.hasMany(Appointment, {foreignKey: "staff_id"})
Appointment.belongsTo(Staff, {foreignKey: "staff_id"})

Service.hasMany(Appointment, {foreignKey: "service_id"})
Appointment.belongsTo(Service, {foreignKey: "service_id"})

export {
    Clinic,
    Appointment,
    Availability,
    Patient,
    Service,
    Staff,
    Patient,
    Admin
}