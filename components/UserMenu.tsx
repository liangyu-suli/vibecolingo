"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/AuthContext"

export function UserMenu() {
  const { user, loading, signInWithGoogle, signOut } = useAuth()
  const [open, setOpen] = useState(false)

  if (loading) {
    return <div className="h-9 w-9 rounded-full bg-[#f7f7f7] border-2 border-[#e5e5e5] animate-pulse" />
  }

  if (!user) {
    return (
      <button
        onClick={signInWithGoogle}
        className="btn-primary-3d px-4 py-2 text-sm"
      >
        Sign in with Google
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full border-2 border-[#e5e5e5] px-3 py-1 hover:border-[#ccc] transition-colors"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="" className="h-7 w-7 rounded-full" />
        ) : (
          <div className="h-7 w-7 rounded-full bg-duo-green flex items-center justify-center text-white text-xs font-black">
            {user.displayName?.[0] ?? "U"}
          </div>
        )}
        <span className="text-xs font-black text-[#4b4b4b] hidden sm:block">
          {user.displayName?.split(" ")[0]}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl border-2 border-[#e5e5e5] bg-white shadow-lg z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-[#e5e5e5]">
            <p className="text-xs font-black text-[#3c3c3c] truncate">{user.displayName}</p>
            <p className="text-[10px] text-[#afafaf] truncate">{user.email}</p>
          </div>
          <button
            onClick={() => { signOut(); setOpen(false) }}
            className="w-full px-4 py-3 text-left text-sm font-bold text-[#ff4b4b] hover:bg-[#fff5f5] transition-colors"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}
