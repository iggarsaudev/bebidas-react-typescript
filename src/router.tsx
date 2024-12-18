import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}> {/* esto hace que todas las rutas que estén dentro de este bloque van a utilizar ese Layout como diseño principal, lo hacemos para reutilizar el Header */}
                    <Route path='/' element={
                        <Suspense fallback="Cargando..."> {/* esto hace que al hacer el build genere tantos ficheros cómo páginas tengas y el usuario solo descarga la página a la que entra en lugar de todas al principio*/}
                            <IndexPage />
                        </Suspense>
                    } index />
                    <Route path='/favoritos' element={
                        <Suspense fallback="Cargando...">
                            <FavoritesPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
