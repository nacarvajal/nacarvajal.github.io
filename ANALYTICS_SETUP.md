# Activación de Google Analytics 4

La implementación está preparada, pero **no recopila datos** hasta configurar un ID de medición auténtico.

## 1. Obtener el ID
En [Google Analytics](https://analytics.google.com/), abre la propiedad de tu sitio y entra a **Administrador → Flujos de datos → Web**. Copia el ID de medición del flujo de `https://nacarvajal.github.io/` (formato `G-XXXXXXXXXX`).

## 2. Activar medición
Edita la constante `MEASUREMENT_ID` en `analytics.js`, que actualmente contiene una cadena vacía, y escribe tu ID real entre comillas. Revisa la configuración de privacidad y consentimiento aplicable antes de activar la etiqueta.

No sustituyas el ID con el de ejemplo.

## 3. Qué se mide
- `page_view`: visitas a cada una de las cuatro páginas a través de la configuración predeterminada de GA4.
- `generate_lead`: envío válido del formulario que prepara la apertura de WhatsApp (`lead_source: whatsapp_form`).
- `whatsapp_click`: intento de abrir `wa.me` tras enviar el mismo formulario.

**Ninguno de los eventos confirma que se envió un mensaje de WhatsApp ni que ocurrió una venta.** Los dos eventos de contacto ocurren en la misma interacción, por lo que no deben sumarse como dos conversiones distintas.

El nombre, la revista seleccionada y el texto del mensaje **no se envían como parámetros** a Analytics. Las URL del sitio tampoco incluyen esos datos.

## 4. Validación
1. Comprueba en **Tiempo real** que se registre una visita después de cargar la página.
2. Utiliza **DebugView** o Google Tag Assistant para examinar el formulario.
3. Verifica que se activen ambos eventos cuando se intenta abrir WhatsApp.
4. Marca **solo `generate_lead`** como evento clave si quieres medir una sola conversión por envío válido.
5. Compara datos con Google Search Console para analizar la captación orgánica.

## 5. Privacidad
Antes de ponerlo en producción, revisa la necesidad de un aviso o consentimiento para analítica según tu normativa y la audiencia de tu sitio. Hasta completar la configuración, el script compartido no carga `gtag.js`.
