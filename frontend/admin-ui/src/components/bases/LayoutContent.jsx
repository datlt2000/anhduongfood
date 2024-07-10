import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loader from './Loader'

const LayoutContent = ({ routes }) => {
    return (
        <div>
            <Suspense fallback={<Loader color="primary" />}>
                <Routes>
                    {routes.map((route, idx) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={route.element}
                                />
                            )
                        )
                    })}
                    <Route path="/" element={<Navigate to="dashboard" replace />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default React.memo(LayoutContent)
