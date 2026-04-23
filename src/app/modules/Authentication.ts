'use server';
import { createClient } from "@/lib/supabase/server";
import { notify } from "@/utils/toastHelper";

export const Authentication = async (email: string, password: string) => {
    const supabase = await createClient();

    // Query the database for a user matching BOTH email and password
    const { data: user, error } = await supabase
        .from("Credentials")
        .select("gmail, role") 
        .eq("gmail", email)
        .eq("password", password)
        .single();

    if (error || !user) {
        notify('Invalid email or password.', 'error');
        return null;
    }

    if (user) {
        return {
            email: user.gmail,
            role: user.role
        };
    }
}