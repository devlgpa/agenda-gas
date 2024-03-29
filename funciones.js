function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() 
{
    let hoja = SpreadsheetApp.openById('1lTLRPoj5PhYbvk8mZDK8LKlsr4SUWFiUA61yurUoc5c').getActiveSheet();
    let datos = hoja.getDataRange().getValues(); 
    return datos;
}
