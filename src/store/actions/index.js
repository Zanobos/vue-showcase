import { fetchPatrimoni, cambiaPatrimonio } from "./patrimoni";

export default {
    //Importo le funzioni dagli altri file e le esporto tutte insieme come oggetto actions
    fetchPatrimoni: fetchPatrimoni,
    cambiaPatrimonio: cambiaPatrimonio
}