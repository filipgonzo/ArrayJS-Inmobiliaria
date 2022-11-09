const propiedadesJson = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
    "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthetalentcatalyst.com%2Fwp-content%2Fuploads%2F2016%2F05%2FMansion.jpg&f=1&nofb=1&ipt=c62c34bf693ebeb69c0bc8b0d0904599dd1066fba548cc13431bb1b70a594bf9&ipo=images",
    rooms: 5,
    m: 500
  },

];
 
let html =" "
for (let propiedad of propiedadesJson){
 html += `
  <div class="propiedades" id="propiedad">
    <div class="propiedad" >
      <div class="img" style="background-image: url(${propiedad.src})"></div>  
      <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex flex-column">
        <p>Dormitorios: ${propiedad.rooms}</p>
        <p>Metros: ${propiedad.m}</p>
      </div>
      <p class="my-3">${propiedad.description}</p>
      <button class="btn btn-info ">Ver más</button>
      </section>
    </div>
  </div>
`
}
const prop = document.querySelector("#propiedad");
prop.innerHTML = html;

function filtroPropiedades(){
  const cantidadCuartos = document.querySelector('#cantidadCuartos').value;
  const metrosDesde = document.querySelector('#desde').value;
  const metrosHasta = document.querySelector('#hasta').value;

  let htmlFiltrado = ''; 
  let contador = 0;

  for(const inmueble of propiedadesJson){
    
    if (cantidadCuartos == inmueble.rooms && (inmueble.m >= metrosDesde && inmueble.m <= metrosHasta))
    {
      contador++;
      htmlFiltrado += `
      <div class="propiedades" id="propiedad">
        <div class="propiedad" >
          <div class="img" style="background-image: url(${inmueble.src})"></div>  
          <section>
            <h5>${inmueble.name}</h5>
            <div class="d-flex flex-column">
            <p>Dormitorios: ${inmueble.rooms}</p>
            <p>Metros: ${inmueble.m}</p>
          </div>
          <p class="my-3">${inmueble.description}</p>
          <button class="btn btn-info ">Ver más</button>
          </section>
        </div>
      </div>
    `
    }
  } 
    
  const prop = document.querySelector("#propiedad");
  const cont = document.querySelector("#totalElementos");
  cont.innerHTML = contador;
  prop.innerHTML = htmlFiltrado;
  if (contador==0){
    alert("¡no se han encontrado coincidencias en su busqueda!");
  }   
  }
  