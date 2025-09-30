import { EventManagementSystem } from "./main";

async function iniciarAplicacion(): Promise<void> {
  console.log(" Iniciando Sistema de Gestión de Local de Eventos");

  const sistema = new EventManagementSystem();
  await sistema.ejecutarTodasLasPruebas();
}

iniciarAplicacion().catch((error) => {
  console.error(" Error fatal en la aplicación:", error);
  process.exit(1);
});
