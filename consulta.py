import mysql.connector

# Conexión a la base de datos
conexion = mysql.connector.connect(
    host="localhost",       # Dirección del servidor de base de datos
    user="baggio",          # Usuario proporcionado
    password="eVSQS6MhjphBDdhl",  # Contraseña proporcionada
    database="baggio"       # Nombre de la base de datos
)

# Crear un cursor
cursor = conexion.cursor()

# Ejecutar una consulta SQL
cursor.execute("SELECT * FROM pedidos") 
# Obtener y mostrar los resultados
resultados = cursor.fetchall()
for fila in resultados:
    print(fila)

# Cerrar la conexión
conexion.close()