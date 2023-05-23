import React, { useCallback } from 'react'
import { changeLocale } from "gatsby-plugin-react-intl"

export default function Lang() {

    const changeLangHandler = useCallback((lang: 'id' | 'en') => {
        changeLocale(lang)
    }, [changeLocale])

    return (
        <div className="lang flex items-center">
            <button onClick={() => changeLangHandler('id')} className='bg-blue-600 mr-2 hover:bg-blue-600 text-white font-semibold py-2 px-4 text-xs rounded shadow'>ID</button>
            <button onClick={() => changeLangHandler('en')} className='bg-blue-300 hover:bg-blue-600 text-white font-semibold py-2 px-4 text-xs rounded shadow'>EN</button>
        </div>
    )
}