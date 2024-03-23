import { api } from '@/lib/axios'

interface UpadateProfileBody {
  name: string
  description: string | null
}
export async function updateProfile({ name, description }: UpadateProfileBody) {
  await api.put('/profile', { name, description })
}
