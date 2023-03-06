import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("workstuff").select();
  return {
    workstuff: data ?? [],
  };
}