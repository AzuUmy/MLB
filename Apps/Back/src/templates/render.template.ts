import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

export function renderTemplate(templateName: string, data: any) {
  const filePath = path.join(__dirname, `${templateName}.hbs`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Email template not found: ${filePath}`);
  }

  const source = fs.readFileSync(filePath, 'utf8');
  return Handlebars.compile(source)(data);
}