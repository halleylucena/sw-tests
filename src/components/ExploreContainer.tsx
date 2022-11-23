import React, { lazy, useEffect } from "react"
import "./ExploreContainer.css"

const Button = window.innerWidth >= 576 ? lazy(() => import("remote/ButtonDesktop")) : lazy(() => import("remote/ButtonMobile"))
interface ContainerProps {
    name: string
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    useEffect(() => {
        console.log("Window", window.innerWidth)
    }, [])

    return (
        <div className="container">
            <strong>{name}</strong>
            <p>
                Explore{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
                    UI Components
                </a>
            </p>
            <React.Suspense>
                <Button text="Host" />
            </React.Suspense>
        </div>
    )
}

export default ExploreContainer
