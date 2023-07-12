import Head from "next/head";

const Meta = ({title, keywords, description, ogTitle, ogType, ogUrl, ogImage}) => {
    return ( 
       <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
           <meta name="keywords" content={keywords}></meta>
           <meta name="description" content={description}></meta>
           <meta property="og:title" content={ogTitle} />
           <meta property="og:type" content={ogType} />
           <meta property="og:url" content={ogUrl} />
           <meta property="og:image" content={ogImage} />
           <meta charSet="utf-8"></meta>
           <link rel="icon" href="/01_HECO.jpg"></link>
           <title>{title}</title>
       </Head>
     );
}
 Meta.defaultProps = {
     title: "HECO | Cargadores Tesla para Hogares en Tijuana, Baja California, México",
     keywords: "Cargadores Tesla, instalación de cargadores Tesla, carga de vehículos eléctricos, cargadores para hogares, movilidad eléctrica, energía sustentable, carga conveniente, carga rápida, Tijuana, Baja California, México, ahorro de costos, infraestructura de carga, servicio profesional, eficiencia energética, soluciones personalizadas, expertos en cargadores Tesla, electromovilidad, energía limpia, sostenibilidad, innovación tecnológica",
     description: "HECO es una empresa especializada en la instalación de cargadores Tesla para hogares en Tijuana, Baja California, México. Brindamos soluciones personalizadas y eficientes para la carga de vehículos eléctricos.",
     ogTitle: "HECO | Cargadores Tesla para Hogares en Tijuana, Baja California, México",
     ogImage:"/01_HECO.jpg"
 }

 export default Meta;