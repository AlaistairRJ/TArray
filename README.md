# TArray

**FIRST**

Retorna o primeiro item do array. Caso o array n�o contenha nenhum item retorna um objeto vazio.

``` js
var carros = [
	{
		codigo: 0,
		nome: "Fusca"
	},
	{
		codigo: 1,
		nome: "Gol"
	},
	{
		codigo: 2,
		nome: "Brasilia"
	}
]

var carro = carros.first();

-------------------------------------
Resultado:
-------------------------------------

{
	codigo: 0,
	nome: "Fusca"
}
```


**LAST**

Retorna o �ltimo item do array. Caso o array n�o contenha nenhum item retorna um objeto vazio.

``` js
var carros = [
	{
		codigo: 0,
		nome: "Fusca"
	},
	{
		codigo: 1,
		nome: "Gol"
	},
	{
		codigo: 2,
		nome: "Brasilia"
	}
]

var carro = carros.last();

-------------------------------------
Resultado:
-------------------------------------

{
	codigo: 2,
	nome: "Brasilia"
}
```


**TOP**

Retorna os primeiros N items do array. Caso n�o passe nenhum parametro, retorna um array vazio. Caso passe um n�mero maior que a quantidade de itens retorna o array.

``` js
var carros = [
	{
		codigo: 0,
		nome: "Fusca"
	},
	{
		codigo: 1,
		nome: "Gol"
	},
	{
		codigo: 2,
		nome: "Brasilia"
	}
]

var carro = carros.top(2);

-------------------------------------
Resultado:
-------------------------------------

{
	codigo: 0,
	nome: "Fusca"
},
{
	codigo: 1,
	nome: "Gol"
}
```