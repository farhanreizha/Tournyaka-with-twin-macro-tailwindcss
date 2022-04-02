import React from 'react'

const navigation = [
  { name: 'About', href: '#About', current: true },
  { name: 'Event', href: '#Events', current: false },
  { name: 'Contact', href: '#Contact', current: false },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Link = () => {
  return (
    <>
      {navigation.map((items) => (
        <li key={items.index}>
          <a
            href={items.href}
            className={classNames(
              items.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            )}
          >
            {items.name}
          </a>
        </li>
      ))}
    </>
  )
}

export default Link
