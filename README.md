# **Biblioteca David Meléndez**

---

## **Descripción General**

Este proyecto es una aplicación web desarrollada con Angular para gestionar una biblioteca digital. La plataforma permite explorar libros por categorías, ver detalles de cada libro y añadir nuevos títulos a la colección mediante una interfaz amigable y responsiva.

---

## **Características Principales**

### **1. Visualización de Libros**
- **Explorar Categorías:** Los usuarios pueden navegar por una lista de categorías predefinidas para filtrar libros de interés.
- **Detalles del Libro:** Cada libro presenta información detallada, incluyendo:
  - Título
  - Autor
  - Número de páginas
  - Descripción
  - Edición
  - Ventas
  - Imagen de portada

### **2. Gestión de Nuevos Libros**
- **Añadir Libros:** Los usuarios pueden agregar nuevos libros proporcionando datos como título, autor, categoría, y una imagen de portada.
- **Categorías Predefinidas:** Un menú desplegable asegura consistencia en las categorías, evitando errores.

### **3. Diseño Responsivo**
- **Diseño Profesional:** Implementado con Bootstrap para asegurar una experiencia visual y funcional óptima en dispositivos móviles y de escritorio.
- **Estructura en Dos Columnas:** Los libros se muestran en una cuadrícula para facilitar la navegación.

---

## **Estructura del Proyecto**

### **Frontend**
- **Framework:** Angular
- **Componentes Principales:**
  - `AppComponent`: Punto de entrada principal.
  - `CategoriasComponent`: Permite seleccionar categorías de libros.
  - `DetallesComponent`: Muestra detalles del libro seleccionado.
  - `AniadirComponent`: Formulario para añadir nuevos libros.
- **Estilos:** Uso extensivo de Bootstrap para la interfaz de usuario.

### **Backend**
- **Simulación con JSON Server:**
  - El backend utiliza un archivo `db.json` que actúa como fuente de datos para los libros.
  - La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

---

## **Flujo de Trabajo**

1. **Inicio:**
   - El usuario es recibido con una lista de categorías.
2. **Explorar Libros:**
   - Al seleccionar una categoría, se muestra una lista de libros correspondientes.
3. **Ver Detalles:**
   - Cada libro incluye una tarjeta con detalles clave e imagen de portada.
4. **Agregar Libros:**
   - Los usuarios pueden añadir libros mediante un formulario con validaciones.

---

## **Requerimientos**

- **Entorno de Desarrollo:**
  - Node.js (>= 14.x)
  - Angular CLI (>= 15.x)
- **Dependencias Clave:**
  - `@angular/common/http`: Para la comunicación con la API.
  - `bootstrap`: Para estilos responsivos.
  - `json-server`: Para la simulación de la API backend.

---

## **Configuración y Despliegue**

1. **Instalar Dependencias:**
   ```bash
   npm install

    Iniciar el Servidor JSON:

- npx json-server --watch db.json --port 3000

**Iniciar la Aplicación Angular:**

 - ng serve

**Acceder a la Aplicación:**

    - Frontend: http://localhost:4200
    - API Backend: http://localhost:3000/libros