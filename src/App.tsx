import { Cog, Clock } from 'lucide-react'
import './app.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5FCFF] flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-8">
        <span className="text-[#327085] text-4xl font-semibold">atend</span>
      </div>

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Illustration Side */}
          <div className="w-full md:w-1/2 p-8 bg-[#F5FCFF] flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-[#394180]/10 rounded-full" />
              <div className="absolute top-1/4 right-0 w-6 h-6 bg-[#394180]/10 rounded-full" />
              <div className="absolute bottom-0 left-1/4 w-4 h-4 bg-[#394180]/10 rounded-full" />
              
              {/* Main Illustration */}
              <div className="relative z-10 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cog className="w-24 h-24 text-[#394180] animate-spin-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Clock className="w-16 h-16 text-[#394180]" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sitio en Mantenimiento
            </h1>
            <p className="text-gray-600 mb-6">
              Estamos realizando algunas mejoras para brindarte un mejor servicio. Por favor, vuelve más tarde.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#394180] rounded-full" />
                <span className="text-gray-600">Actualizando sistemas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#394180] rounded-full" />
                <span className="text-gray-600">Mejorando la seguridad</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#394180] rounded-full" />
                <span className="text-gray-600">Optimizando el rendimiento</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>¿Necesitas ayuda? Contáctanos en support@atend.com</p>
      </div>
    </div>
  )
}

