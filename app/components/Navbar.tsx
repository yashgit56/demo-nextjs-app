"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartDropdown from "./CartDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#eee] fixed w-full top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold">ECart App</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/checkout">Billing</Link>
            <CartDropdown items={cartItems} />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-6 h-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col gap-4 pb-4 transition-all duration-300 ease-in-out">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link href="/checkout" onClick={() => setIsOpen(false)}>
              Billing
            </Link>
            <CartDropdown items={cartItems} isMobile={true} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
