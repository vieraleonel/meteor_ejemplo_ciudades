// Declaro la colección de ciudades
ciudades = new Meteor.Collection('ciudades');

// Vinculo el template con la colección
Template.ciudadesList.ciudades = function() {
    return ciudades.find();
};

// Submit del formulario
Template.ciudadForm.events = {
    'submit': function (e, tmpl) {
        // Prevengo la acción por defecto (submit)
        e.preventDefault();

        // Creo la ciudad
        var ciudad = {
            nombre: tmpl.find('#nombre').value,
        };
 
        // agrego la ciudad a la collección
        ciudades.insert(ciudad);
 
        //Reseteo el formulario
        tmpl.find('#nombre').value = ''

    } // submit
}; // Template.ciudadForm.events