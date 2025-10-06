import { AppDataSource } from "./src/data-source";

async function generatePlantUML() {
    try {
        await AppDataSource.initialize();
        console.log("✅ Conexión establecida\n");

        const metadata = AppDataSource.entityMetadatas;
        
        let plantUML = "@startuml\n";
        plantUML += "!theme plain\n";
        plantUML += "skinparam linetype ortho\n\n";

        // Generar entidades
        for (const entity of metadata) {
            plantUML += `entity "${entity.tableName}" {\n`;
            
            // Columnas
            for (const column of entity.columns) {
                let line = "  ";
                
                if (column.isPrimary) {
                    line += "* ";
                } else if (!column.isNullable) {
                    line += "+ ";
                } else {
                    line += "  ";
                }
                
                line += `${column.databaseName} : ${column.type}`;
                
                if (column.isPrimary) {
                    line += " <<PK>>";
                }
                
                plantUML += line + "\n";
            }
            
            plantUML += "}\n\n";
        }

        // Generar relaciones
        for (const entity of metadata) {
            for (const relation of entity.relations) {
                const fromTable = entity.tableName;
                const toTable = relation.inverseEntityMetadata.tableName;
                
                if (relation.relationType === "many-to-one") {
                    plantUML += `"${fromTable}" }o--|| "${toTable}"\n`;
                } else if (relation.relationType === "one-to-many") {
                    plantUML += `"${fromTable}" ||--o{ "${toTable}"\n`;
                } else if (relation.relationType === "one-to-one") {
                    plantUML += `"${fromTable}" ||--|| "${toTable}"\n`;
                } else if (relation.relationType === "many-to-many") {
                    plantUML += `"${fromTable}" }o--o{ "${toTable}"\n`;
                }
            }
        }

        plantUML += "\n@enduml";

        console.log(plantUML);
        console.log("\n" + "=".repeat(60));
        console.log("📋 Copia el contenido anterior y pégalo en:");
        console.log("   🔗 https://www.plantuml.com/plantuml/uml/");
        console.log("   🔗 http://www.planttext.com/");
        console.log("=".repeat(60));

        await AppDataSource.destroy();
    } catch (error) {
        console.error("❌ Error:", error);
    }
}

generatePlantUML();
