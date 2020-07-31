'use strict'

const Producto = use('App/Models/producto')

class ProductoController {

    store({ request }) {
        const { nombre, precio, descripcion, url } = request.all()
        const vendido = '0';

        const producto = Producto.create({
            nombre,
            precio,
            descripcion,
            url,
            vendido
        })

        return producto;
    }

    index() {
        return Producto.all();
    }

    async update( { request } ) {
        const { id } = request.all()

        const producto = await Producto.find(id);

        producto.vendido = '1';

        await producto.save();
        
        return producto;
    }
}

module.exports = ProductoController
