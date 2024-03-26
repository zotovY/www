'use client'

import { FC, memo } from "react";
import styles from "./theme-change-button.module.scss";
import { useTheme } from "next-themes";
import { useMounted } from "@/utils/use-mounted";

export type ThemeChangeButtonProps = {}

export const ThemeChangeButton: FC<ThemeChangeButtonProps> = memo(() => {
    const {theme, setTheme} = useTheme()
    const mounted = useMounted()
    
    if (!mounted) {
        return <div className={ styles.button }/>
    }
    
    return <div
        className={ styles.button }
        onClick={ () => setTheme(theme == "dark" ? "light" : "dark") }>
        {
            theme == "dark" ? <SunIcon/> : <MoonIcon/>
        }
    </div>
})



const MoonIcon: FC = memo(() => {
    return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.5264 11.8706C14.5225 11.8706 15.5352 11.688 16.2075 11.4141C16.4067 11.3394 16.5063 11.3311 16.6392 11.3311C16.8965 11.3311 17.187 11.5635 17.187 11.9038C17.187 11.9951 17.1704 12.1777 17.0708 12.3936C15.7261 15.498 12.7959 17.3906 9.18506 17.3906C4.14648 17.3906 0.48584 13.7217 0.48584 8.68311C0.48584 5.19678 2.64404 1.95947 5.71533 0.714355C5.94775 0.623047 6.10547 0.598145 6.17188 0.598145C6.52051 0.598145 6.77783 0.921875 6.77783 1.1958C6.77783 1.36182 6.75293 1.47803 6.62842 1.71875C6.32129 2.31641 6.11377 3.42871 6.11377 4.69043C6.11377 9.11475 8.95264 11.8706 13.5264 11.8706ZM1.78906 8.625C1.78906 12.958 4.92676 16.0957 9.23486 16.0957C11.9077 16.0957 14.3398 14.8257 15.6016 12.7422C14.9126 12.9829 14.1904 13.0825 13.3354 13.0825C8.03955 13.0825 4.87695 9.99463 4.87695 4.80664C4.87695 3.86035 5.01807 3.00537 5.28369 2.2334C3.13379 3.58643 1.78906 6.04346 1.78906 8.625Z"
            fill="var(--secondary-text-color)"/>
    </svg>
})

const SunIcon: FC = memo(() => {
    return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.81152 2.62354C8.28027 2.62354 7.84033 2.18359 7.84033 1.65234C7.84033 1.12109 8.28027 0.681152 8.81152 0.681152C9.34277 0.681152 9.78271 1.12109 9.78271 1.65234C9.78271 2.18359 9.34277 2.62354 8.81152 2.62354ZM3.60693 4.77344C3.07568 4.77344 2.63574 4.3335 2.63574 3.80225C2.63574 3.271 3.07568 2.83105 3.60693 2.83105C4.14648 2.83105 4.57812 3.271 4.57812 3.80225C4.57812 4.3335 4.14648 4.77344 3.60693 4.77344ZM14.0161 4.77344C13.4849 4.77344 13.0449 4.3335 13.0449 3.80225C13.0449 3.271 13.4849 2.83105 14.0161 2.83105C14.5474 2.83105 14.9873 3.271 14.9873 3.80225C14.9873 4.3335 14.5474 4.77344 14.0161 4.77344ZM8.81152 13.2319C6.50391 13.2319 4.58643 11.3145 4.58643 9.00684C4.58643 6.69092 6.50391 4.77344 8.81152 4.77344C11.1191 4.77344 13.0449 6.69092 13.0449 9.00684C13.0449 11.3145 11.1191 13.2319 8.81152 13.2319ZM8.81152 11.9702C10.4302 11.9702 11.7832 10.6255 11.7832 9.00684C11.7832 7.37988 10.4302 6.03516 8.81152 6.03516C7.19287 6.03516 5.84814 7.38818 5.84814 9.00684C5.84814 10.6255 7.19287 11.9702 8.81152 11.9702ZM1.45703 9.97803C0.925781 9.97803 0.48584 9.53809 0.48584 9.00684C0.48584 8.46729 0.925781 8.03564 1.45703 8.03564C1.98828 8.03564 2.42822 8.46729 2.42822 9.00684C2.42822 9.53809 1.98828 9.97803 1.45703 9.97803ZM16.166 9.97803C15.6348 9.97803 15.1948 9.53809 15.1948 9.00684C15.1948 8.46729 15.6348 8.03564 16.166 8.03564C16.6973 8.03564 17.1372 8.46729 17.1372 9.00684C17.1372 9.53809 16.6973 9.97803 16.166 9.97803ZM14.0161 15.1826C13.4849 15.1826 13.0449 14.7427 13.0449 14.2114C13.0449 13.6719 13.4849 13.2402 14.0161 13.2402C14.5474 13.2402 14.9873 13.6719 14.9873 14.2114C14.9873 14.7427 14.5474 15.1826 14.0161 15.1826ZM3.60693 15.1826C3.07568 15.1826 2.63574 14.7427 2.63574 14.2114C2.63574 13.6719 3.07568 13.2402 3.60693 13.2402C4.14648 13.2402 4.57812 13.6719 4.57812 14.2114C4.57812 14.7427 4.14648 15.1826 3.60693 15.1826ZM8.81152 17.3325C8.28027 17.3325 7.84033 16.8926 7.84033 16.3613C7.84033 15.8218 8.28027 15.3901 8.81152 15.3901C9.34277 15.3901 9.78271 15.8218 9.78271 16.3613C9.78271 16.8926 9.34277 17.3325 8.81152 17.3325Z"
            fill="var(--secondary-text-color)"/>
    </svg>
})