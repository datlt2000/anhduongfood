import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const LayoutContent = ({ routes }) => {
    return (
        <>
            <Suspense fallback={<Spinner color="primary" />}>
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
        </>
    )
}

export default React.memo(LayoutContent)
