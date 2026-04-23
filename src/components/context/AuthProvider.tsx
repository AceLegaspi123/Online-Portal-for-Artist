"use client"

import {createContext, useContext, useEffect, useState} from "react";
import {createClient} from "@/lib/supabase/client";
import {Session} from "@supabase/supabase-js";
import client from "@/api/client";

interface AuthContextType {
  session: Session | null;
}

const AuthContext = createContext<AuthContextType>({ session: null });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      setUser(data?.session || null);
      setLoading(false);
    });
}