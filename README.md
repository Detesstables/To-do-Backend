# To-Do Backend API

Una API RESTful robusta para una aplicación de lista de tareas, desarrollada como parte de mi portafolio personal. Este proyecto demuestra mis habilidades en el desarrollo de backends modernos con Node.js, Express y una base de datos de MongoDB. Este proyecto fue desarrollado por Jorge Rebaza

---

### 🚀 Tecnologías Utilizadas

* **Node.js**: Entorno de ejecución del lado del servidor.
* **TypeScript**: Lenguaje de programación que añade tipado estático a JavaScript.
* **Express**: Framework web para Node.js, utilizado para construir la API.
* **MongoDB**: Base de datos NoSQL, utilizada para la persistencia de datos.
* **Mongoose**: Biblioteca de modelado de objetos (ODM) para MongoDB.
* **dotenv**: Módulo para cargar variables de entorno desde un archivo `.env`.

---

### 📋 Endpoints de la API

La API expone los siguientes endpoints para gestionar las tareas. La URL base es `http://localhost:3000/api/todos`.

| Método | Endpoint | Descripción | Ejemplo de Petición (Body) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/todos` | Obtiene todas las tareas. | - |
| `POST` | `/api/todos` | Crea una nueva tarea. | `{ "task": "Aprender a hacer backends" }` |
| `PUT` | `/api/todos/:id` | Actualiza una tarea existente. | `{ "completed": true }` |
| `DELETE`| `/api/todos/:id` | Elimina una tarea por su ID. | - |

---

### ⚙️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/Detesstables/To-do-Backend.git](https://github.com/Detesstables/To-do-Backend.git)
    cd To-do-Backend
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo llamado `.env` en la raíz del proyecto. **No subas este archivo a GitHub.**

    ```bash
    MONGO_URI=mongodb+srv://<tu-usuario>:<tu-contraseña>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
    ```

4.  **Ejecuta el servidor:**
    ```bash
    npm run dev
    ```

---

### 🔗 Conexión con el Frontend

Esta API está diseñada para funcionar en conjunto con el siguiente repositorio de frontend:
**[To-do Frontend](https://github.com/Detesstables/To-do-Frontend.git)**

---

### 📝 Licencia

Este proyecto está bajo la Licencia MIT.