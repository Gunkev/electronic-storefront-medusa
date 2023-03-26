import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">
              <img src="/logo.png" alt="" width={50} />
            </a>
          </Link>
          <p className="py-5 text-sm text-[#999]">
            Get the best electronics from the best place
          </p>
          <div className="flex flex-col-reverse gap-y-0 justify-center xsmall:items-center xsmall:flex-row xsmall:justify-between">
            <span className="text-xsmall-regular text-gray-500">
              © Copyright 2023 ES store
            </span>
            <div className="min-w-[316px] flex xsmall:justify-end">
              <CountrySelect />
            </div>
          </div>
        </div>
        <div className="text-small-regular grid grid-cols-3 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Home Utencils</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="https://utencils" target="_blank" rel="noreferrer">
                  Water Dispensor
                </a>
              </li>
              <li>
                <a href="https://mat" target="_blank" rel="noreferrer">
                  Cooking mat
                </a>
              </li>
              <li>
                <a href="https://opener" target="_blank" rel="noreferrer">
                  Drink Opener
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Device</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="https://computer" target="_blank" rel="noreferrer">
                  Computer
                </a>
              </li>
              <li>
                <a href="https://phone" target="_blank" rel="noreferrer">
                  Phones
                </a>
              </li>
              <li>
                <a href="https://watch" target="_blank" rel="noreferrer">
                  Watch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
