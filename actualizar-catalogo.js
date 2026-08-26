import fs from "fs";
import path from "path";
import XLSX from "xlsx";

const excelPath = path.resolve("Catalogo JLB.xlsx");
const outputPath = path.resolve("src/data/products.js");

const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const rows = XLSX.utils.sheet_to_json(sheet, {
  defval: "",
});

// Normaliza los nombres de las columnas
function normalizeKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s_-]+/g, "")
    .toLowerCase()
    .trim();
}

// Busca una columna aunque tenga mayúsculas,
// espacios, acentos o guiones diferentes
function getValue(row, possibleNames) {
  const normalizedRow = {};

  Object.keys(row).forEach((key) => {
    normalizedRow[normalizeKey(key)] = row[key];
  });

  for (const name of possibleNames) {
    const value = normalizedRow[normalizeKey(name)];

    if (
      value !== undefined &&
      value !== null &&
      String(value).trim() !== ""
    ) {
      return String(value).trim();
    }
  }

  return "";
}

const products = rows
  .map((row, index) => ({
    id: index + 1,

    codigoJLB: getValue(row, [
      "codigoJLB",
      "Código JLB",
      "Codigo JLB",
      "CODIGO JLB",
    ]),

    codigoMack: getValue(row, [
      "codigoMack",
      "Código Mack",
      "Codigo Mack",
      "CODIGO MACK",
    ]),

    nombre: getValue(row, [
      "nombre",
      "Nombre",
      "NOMBRE",
    ]),

    categoria: getValue(row, [
      "categoria",
      "Categoría",
      "Categoria",
      "CATEGORIA",
    ]),

    imagen: getValue(row, [
      "imagen",
      "Imagen",
      "IMAGEN",
    ]),

    descripcion: getValue(row, [
      "descripcion",
      "Descripción",
      "Descripcion",
      "DESCRIPCION",
    ]),
  }))
  .filter((product) => product.nombre || product.codigoMack || product.codigoJLB);

const content = `const products = ${JSON.stringify(
  products,
  null,
  2
)};\n\nexport default products;\n`;

fs.writeFileSync(outputPath, content, "utf8");

console.log("✅ Catálogo actualizado correctamente.");
console.log(`📦 Productos encontrados: ${products.length}`);
console.log(`📄 Archivo actualizado: ${outputPath}`);