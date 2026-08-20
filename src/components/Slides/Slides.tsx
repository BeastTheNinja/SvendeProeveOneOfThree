import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Slides.module.scss";

function Slides() {
    const {
        data: slides,
        loading,
        error,
    } = useFetch<any[]>("/api/slides");

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (!slides || slides.length === 0) {
            return;
        }

        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!slides || slides.length === 0) {
        return <p>Ingen slides fundet.</p>;
    }

    return (
        <section className={styles.slider}>
            {slides.map((slide, index) => (
                <img
                    key={slide.id}
                    className={`${styles.image} ${index === activeSlide ? styles.active : ""
                        }`}
                    src={`${import.meta.env.VITE_API_URL}${slide.imageUrl}`}
                    alt={slide.name}
                />
            ))}

            <div className={styles.controls}>
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ""
                            }`}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Gå til slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Slides;