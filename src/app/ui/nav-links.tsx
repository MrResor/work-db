'use client'

import { usePathname } from 'next/navigation'
import styles from './ui.module.css'
import Link from 'next/link'

export function NavLinks() {
    const pathname = usePathname()

    return (
        <nav>
            <Link className={styles.link} href="/">
                Home
            </Link>

            <Link
                className={styles.link}
                href="/dashboard"
            >
                Dashboard
            </Link>
        </nav>
    )
}