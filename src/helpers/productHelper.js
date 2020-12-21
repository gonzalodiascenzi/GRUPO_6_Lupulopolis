const fs = require('fs');
const path = require('path');
const productsFilePath = path.resolve(__dirname, '../data/productData.json');

const helper = { 
    getAllProducts(){
        const jsonProducts = fs.readFileSync(productsFilePath, 'utf-8');
        const productsParsed = JSON.parse(jsonProducts);
        return productsParsed;
    },

    writeProducts(arrayToTransform){
        const productsJson = JSON.stringify(arrayToTransform, null, " ");
        fs.writeFileSync(productsFilePath, productsJson);
    },
    
    generateNewId(){
        const products = getAllProducts();
        return products.pop().id + 1;
  },
    
    delete(idToDelete){
      let products = getAllProducts();
        const productToDelete = idToDelete;
        products = products.filter(function(product){
            return product.id != productToDelete;
        });
        helper.writeProducts(products);
    }


}

module.exports = helper;