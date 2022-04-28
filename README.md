# ASINCRONIA JAVASCRIPT
Ejecutar los scripts configurados en package.json para detallar el comportamiento.

### CallBacks: 
Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Scripts => callback:index
Scripts => callback:challenge

#### Ventajas:
	1. Simple y fácil de implementar
	2. Son universales, corren en cualquier navegador
#### Desventajas:
	1. Composición tosca anidadada (callback hell)
	2. Flujo poco intuitivo
	3. Difícil de controlar excepciones


### Promise:

Es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

Scripts => promise:index
Scripts => promise:challenge

#### Ventajas:
	1. Fácil de enlazar
	2. Intuitivo de leer
	3. Poderoso y gran capacidad con asincronismo
	
#### Desventajas:
	1. No maneja excepciones
	2. Propenso a errores
	3. Requiere un pollify para funcionar en todos los navegadores (Trascompilación)

### ASYNC / AWAIT:
Tratan promesas como si fueran funciones sincronas.

Scripts => async:challenge

#### Ventajas:
	1. Manejo de excepciones
	2. Fáciles de leer e interpretar

#### Desventajas:
	1. Requiere un pollify para funcionar en todos los navegadores (Trascompilación)

