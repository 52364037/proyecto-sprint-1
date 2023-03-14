// 1. Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, contraseña y tipo de usuario. El tipo de usuario será: 1: administrador, 2: cliente. Guardarla en un array de objetos.
// 2. Realizar un programa que al inicio solicite ingresar documento y contraseña, si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña, si el usuario es administrador, debe permitir cargar el cajero de la siguiente manera:
// 3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.
// 4. Almacenar esta información en un array de objetos.
// 5. Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total general.
// 6. Una vez el cajero esté cargado, debe volver a solicitar usuario y contraseña, si es administrador, se repite el mismo proceso, sumar a la cantidad actual, si es cliente debe proseguir de la siguiente manera:
// 7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: “Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el inicio.
// 8. Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a retirar. Una vez obtenida la información, debe indicar cuánto dinero puede entregar basado en la cantidad disponible y los tipos de billetes. Luego debe mostrar en consola cuántos billetes de cada denominación entregó. Priorizando siempre las denominaciones más altas para valores altos y redondeando a la cifra más cercana menor a la solicitada.
// 9. Posteriormente, debe aparecer en consola, el dinero restante en el cajero, por cada denominación.

const listaUsuarios = [
    {
        nombre: 'Andres Diaz',
        numeroDedocumento: '74123',
        contraseña: 'ad123',
        usuario1: 'administrador',

    },

    {
        nombre: 'Diana Ruiz',
        numeroDedocumento: '25789',
        contraseña: 'dr123',
        usuario2: 'cliente',
    },

    {
        nombre: 'Dora Gomez',
        numeroDedocumento: '45612',
        contraseña: 'dg123',
        usuario2: 'cliente',

    },
    {
        nombre: 'Juan Perez',
        numeroDedocumento: '74123',
        contraseña: 'jp123',
        usuario2: 'cliente'

    },

    {
        nombre: 'Sebastian Diaz',
        numeroDedocumento: '25896',
        contraseña: 'sd123',
        usuario2: 'cliente'
    },

    {
        nombre: 'David Duran',
        numeroDedocumento: '96321',
        contraseña: 'dd123',
        usuario2: 'cliente'
    }
    ]

    const billetes = [
        {
            denominacion: 5000,
            cantidad: 1
   
        },
   
        {
            denominacion: 10000,
            cantidad: 2
        },
   
        {
            denominacion: 20000,
            cantidad:3
        },
   
        {
            denominacion: 50000,
            cantidad: 4
        },
   
        {
            denominacion: 100000,
            cantidad: 5
   
        }
   
    ]
    let entregaDinero;
    let ingresoDeBilletes;
    let ingresoDeBilletes1;
    let ingresoDeBilletes2;
    let ingresoDeBilletes3;
    let ingresoDeBilletes4;
    let variable= prompt("Digita numero de documento");
    let avariable= prompt("Digita coontraseña");
    let van=listaUsuarios.some(function(a){
        return(a.numeroDedocumento==variable &&  a.contraseña==avariable)
    })
    let aver=listaUsuarios.find(function(pan1){
        return pan1.numeroDedocumento==variable  
})

    if(van){
        if(aver.usuario1==listaUsuarios[0].usuario1){
            console.log("Bienvenido admin");
            console.log(`Denominacion:${billetes[4].denominacion} cantidad:${billetes[4].cantidad}`)
            console.log(`Denominacion:${billetes[3].denominacion} cantidad:${billetes[3].cantidad}`)
            console.log(`Denominacion:${billetes[2].denominacion} cantidad:${billetes[2].cantidad}`)
            console.log(`Denominacion: ${billetes[1].denominacion}cantidad:${billetes[1].cantidad}`)
            console.log(`Denominacion:${billetes[0].denominacion}cantidad:${billetes[0].cantidad}`)
            ingresoDeBilletes= prompt("Admin INGRESA CANTIDAD DE BILLETES de 5000");
            ingresoDeBilletes=parseInt(ingresoDeBilletes);
            billetes[0].cantidad+=ingresoDeBilletes

             ingresoDeBilletes1= prompt("Admin INGRESA CANTIDAD DE BILLETES de 10000");
            ingresoDeBilletes1=parseInt(ingresoDeBilletes1);
            billetes[1].cantidad+=ingresoDeBilletes1

            ingresoDeBilletes2= prompt("Admin INGRESA CANTIDAD DE BILLETES de 20000");
            ingresoDeBilletes2=parseInt(ingresoDeBilletes2);
            billetes[2].cantidad+=ingresoDeBilletes2
   
             ingresoDeBilletes3= prompt("Admin INGRESA CANTIDAD DE BILLETES de 50000");
            ingresoDeBilletes3=parseInt(ingresoDeBilletes3);
            billetes[3].cantidad+=ingresoDeBilletes3

            ingresoDeBilletes4= prompt("Admin INGRESA CANTIDAD DE BILLETES de 100000");
            ingresoDeBilletes4=parseInt(ingresoDeBilletes4);
            billetes[4].cantidad+=ingresoDeBilletes4;
             console.log("Bienvenido admin");
            console.log(`Denominacion:${billetes[4].denominacion} cantidad:${billetes[4].cantidad}`)
            console.log(`Denominacion:${billetes[3].denominacion} cantidad:${billetes[3].cantidad}`)
            console.log(`Denominacion:${billetes[2].denominacion} cantidad:${billetes[2].cantidad}`)
            console.log(`Denominacion: ${billetes[1].denominacion}cantidad:${billetes[1].cantidad}`)
            console.log(`Denominacion:${billetes[0].denominacion}cantidad:${billetes[0].cantidad}`)

            console.log(`TOTAL DE DINERO EN EL BANCO: ${(billetes[4].cantidad*billetes[4].denominacion)+(billetes[3].cantidad*billetes[3].denominacion)+(billetes[2].cantidad*billetes[2].denominacion)+(billetes[1].cantidad*billetes[1].denominacion)+(billetes[0].cantidad*billetes[0].denominacion)}`)

            variable= prompt("Digita numero de documento1")
            avariable= prompt("Digita coontraseña")
            van=listaUsuarios.some(function(a){
            return(a.numeroDedocumento==variable &&  a.contraseña==avariable)})
            aver=listaUsuarios.find(function(pan1){
                return pan1.numeroDedocumento==variable })

            if(van==true &&aver.usuario2!=listaUsuarios[0].usuario1){
                        console.log("Bienvenido cliente")
                        retirar=prompt("Cuanto deseas retirar")
                        retirar=parseInt(retirar);
                        entregadinero=billetes[3].cantidad*billetes[3].denominacion
                        entregadinero=entregadinero-retirar
                       console.log(`TOTAL DE DINERO EN EL BANCO: ${(entregadinero)+(billetes[4].cantidad*billetes[4].denominacion)+(billetes[2].cantidad*billetes[2].denominacion)+(billetes[1].cantidad*billetes[1].denominacion)+(billetes[0].cantidad*billetes[0].denominacion)}`)
                       
                    }else{
                            console.log("Eres admin")
                        }
        }else{
                    console.log("Bienvenido cliente")
                    retirar=prompt("Cuanto desea retirar")

                    console.log("Cajero en mantenimiento")
                   
                   
            }
   
    }else{
        console.log("Usuario no registrado")
        while(van==false){
        variable= prompt("Digita numero de documento")
        avariable= prompt("Digita coontraseña")
        van=listaUsuarios.some(function(a){
        return(a.numeroDedocumento==variable &&  a.contraseña==avariable) }) }
        aver=listaUsuarios.find(function(pan1){
            return pan1.numeroDedocumento==variable})

        if(van){
            if(aver.usuario1==listaUsuarios[0].usuario1){
                console.log("Bienvenido admin");
                ingresoDeBilletes= prompt("INGRESA CANTIDAD DE BILLETES de 5000");
                ingresoDeBilletes=parseInt(ingresoDeBilletes);
                billetes[0].cantidad+=ingresoDeBilletes
   
                 ingresoDeBilletes1= prompt("INGRESA CANTIDAD DE BILLETES de 10000");
                ingresoDeBilletes1=parseInt(ingresoDeBilletes1);
                billetes[1].cantidad+=ingresoDeBilletes1
   
                ingresoDeBilletes2= prompt("INGRESA CANTIDAD DE BILLETES de 20000");
                ingresoDeBilletes2=parseInt(ingresoDeBilletes2);
                billetes[2].cantidad+=ingresoDeBilletes2
       
                 ingresoDeBilletes3= prompt("INGRESA CANTIDAD DE BILLETES de 50000");
                ingresoDeBilletes3=parseInt(ingresoDeBilletes3);
                billetes[3].cantidad+=ingresoDeBilletes3
   
                ingresoDeBilletes4= prompt("INGRESA CANTIDAD DE BILLETES de 100000");
                ingresoDeBilletes4=parseInt(ingresoDeBilletes4);
                billetes[4].cantidad+=ingresoDeBilletes4
                console.log("bienvenido admin");
                console.log(`Denominacion:${billetes[4].denominacion} cantidad:${billetes[4].cantidad}`)
                console.log(`Denominacion:${billetes[3].denominacion} cantidad:${billetes[3].cantidad}`)
                console.log(`Denominacion:${billetes[2].denominacion} cantidad:${billetes[2].cantidad}`)
                console.log(`Denominacion: ${billetes[1].denominacion}cantidad:${billetes[1].cantidad}`)
                console.log(`Denominacion:${billetes[0].denominacion} cantidad:${billetes[0].cantidad}`)

                console.log(`TOTAL DE DINERO EN EL BANCO: ${(billetes[4].cantidad*billetes[4].denominacion)+(billetes[3].cantidad*billetes[3].denominacion)+(billetes[2].cantidad*billetes[2].denominacion)+(billetes[1].cantidad*billetes[1].denominacion)+(billetes[0].cantidad*billetes[0].denominacion)}`)
           
                variable= prompt("Digita numero documento")
                avariable= prompt("Digita coontraseña")
                van=listaUsuarios.some(function(a){
                return(a.numeroDedocumento==variable &&  a.contraseña==avariable)})
                aver=listaUsuarios.find(function(pan1){
                    return pan1.numeroDedocumento==variable })
   
                if(van==true &&aver.usuario2!=listaUsuarios[0].usuario1){
                            console.log("Bienvenido cliente")
                            retirar=prompt("Cuanto desea retirar")
                            retirar=parseInt(retirar);
                            entregadinero=billetes[3].cantidad*billetes[3].denominacion
                            entregadinero=entregadinero-retirar
                            console.log(entregadinero)
                           console.log(`TOTAL DE DINERO EN EL BANCO: ${(entregadinero)+(billetes[4].cantidad*billetes[4].denominacion)+(billetes[2].cantidad*billetes[2].denominacion)+(billetes[1].cantidad*billetes[1].denominacion)+(billetes[0].cantidad*billetes[0].denominacion)}`)
                           
                        }else{
                                console.log("Admin")
                            }
   
         }else{
                        console.log("Bienvenido cliente")
                        retirar=prompt("Cuanto deseas retirar")
                        console.log("Cajero en mantenimiento")
                     
                }
           
         }
     }


