import React from 'react'
import Link from 'next/link'
import {FaExclamationTriangle} from 'react-icons/fa'

import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <FaExclamationTriangle className={styles.icon} />
        <h1>404</h1>
        <h4>Ouch, you've portaled to an unknown page!</h4>
        <Link href={'/'}>Go Back to Home</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage