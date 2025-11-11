import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div>
    This is dashboard layout
    {children}
  </div>
}