# Proyecto: Aplicación de Gestión de Usuarios
Due date: 17-jul-2025 @ 10:00 pm

## Objetivo
- Aplicación frontend que permita al cliente realizar las siguientes operaciones
relacionadas a registros de (Usuarios) personas, sin necesitar conectarse a una 
API o backend:
  - **Crear**
  - **Modificar**
  - **Eliminar**

- Debe ser intuitiva y fácil de usar.

## Funcionalidades principales
1. Crear Usuarios.
  - Permitir ingresar datos como **nombre** y **correo electrónico**.
  - Almacenar nuevos Usuarios en el **estado local** de la app.

2. Modificar Usuarios.
  - Permitir seleccionar un Usuario existente y **editar** sus detalles.
  - Actualizar el Usuario en el estado local con la nueva info.

3. Listar Usuarios.
  - Mostrar una **lista** de todos los Usuarios creados, incluyendo sus datos.
  - Cada item de la lista (Usuario) debe tener **botones** para eliminar o editar.

4. Eliminar Usuarios.
  - Opción para **eliminar** un Usuario de la lista.
  - Actualizar el estado local y **reflejar la eliminación**.

## Tareas a realizar
- [ ] Configuración inicial
  - [x] Crear nueva aplicación de React utilizando Create React App
  - [ ] Establecer la estructura de archivos y carpetas iniciales

- [ ] Desarrollo de componentes
  - [ ] Componente principal (App)
    - [ ] Manejar el estado de los Usuarios.
    - [ ] Pasar propiedades a los componentes de **formulario** y **lista de Usuarios**
  - [ ] Componente de formulario (**UserForm**):
    - [ ] Implementar un formulario para la entrada de datos de Usuario.
    - [ ] Manejar la lógica para agregar o editar Usuarios.
  - Componente de lista de Usuarios (**UserList**):
    - [ ] Mostrar la lista de Usuarios.
    - [ ] Implementar lógica para
      - [ ] Eliminar
      - [ ] Editar

- [ ] Gestión de estado
  - [ ] Utilizar el **estado de React** para:
    - [ ] Manejar la lista de Usuarios.
    - [ ] Manejar el Usuario que se está editando.
  - [ ] Asegurar que las actualizaciones en el estado se reflejen en la interfaz.


## Definir un Usuario (modelo)
- Modelo central de la aplicación
- A representar como un `object` con propiedades:
  - Id (id).
  - Nombre (name).
  - Correo electrónico (email).
  - más por confirmar.
  ```javascript
  {
    id: number,
    name: "string",
    email: "string",
  }
  ```
- Definir un set de Usuarios inicial (a guardar en un archivo del proyecto) para 
tener datos que presentar.

## Componentes
### UserCard
Tarjeta para presentar a un Usuario (datos del usuario).

### UserList
Colección de UserCard.
- Añadir y eliminar UserCards se consideran **cambios** y se verán reflejados aquí.

### UserForm
- Formulario para añadir un Usuario.
- Es reutilizable para la edición del Usuario.
- Es necesario un context para manejar las operaciones de Usuarios.