
const HOJA = SpreadsheetApp.openById('1lTLRPoj5PhYbvk8mZDK8LKlsr4SUWFiUA61yurUoc5c').getActiveSheet();

function doGet(datos)
{
  insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos)
{
    insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() 
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellidos, correo, telf)
{
    HOJA.appendRow([nombre, apellidos, correo, telf]);
}