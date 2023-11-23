import React, { FC, memo } from "react";
import "./footer.scss";
import { Link } from "@/components/link/link";

export type FooterProps = {}

export const Footer: FC<FooterProps> = memo(() => {
    return <footer className="footer">
        <div className="info">
            <h4 className="text">
                Interested? Let's get in touch. 
            </h4>
            <a href="mailto:hello@zotov.dev" className="button">hello@zotov.dev</a>
        </div>
        <div className="explore">
            <span className="explore-text">Explore</span>
            <div className="links">
                <Link href="/work">Works</Link>
                <Link href="https://t.me/zotovy">Telegram</Link>
                <Link href="/about">About</Link>
                <Link href="https://github.com/zotovy">Github</Link>
                <Link href="/Contact">Contact</Link>
                <Link href="mailto:hello@zotov.dev">Email</Link>
            </div>
        </div>
    </footer>
})