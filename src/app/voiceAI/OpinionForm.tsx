 {/*import React, { useState } from 'react';
import { useRouter } from "next/router";
import { toast } from "sonner";

interface OpinionFormProps {
  onSubmit: (opinion: string, type: 'positive' | 'negative') => void;
  type: 'positive' | 'negative';
  onCancel: () => void;
}
 {/*
const OpinionForm: React.FC<OpinionFormProps> = ({ onSubmit, type, onCancel }) => {
  const [opinion, setOpinion] = useState('');
    const router = useRouter();

  const projectPathSegments = router.asPath.split("/");
  const projectID = projectPathSegments[1];

  {/*
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (opinion.trim()) {
      try {
        // Realiza la solicitud al backend
        const response = await fetch(`${process.env.NEXT_PUBLIC_TRAINING_BACKEND}/projects/add_voice_rating`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            project_id: projectID, // Aquí va el ID del proyecto
            rating: type === 'positive',
            description: opinion,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          toast.success("Gracias por tu opinión.");
          onSubmit(opinion, type);
          setOpinion('');
        } else {
          toast.error(`Hubo un problema... Intente nuevamente.`);
        }
      } catch (error) {
        toast.error(`Error de conexión`);
      }
    } else {
      toast.error("Debes completar la descripción para enviar.");
    }

  return (
    <form onSubmit={handleSubmit} className="px-8">
      <div className="mb-4">
        <label htmlFor="opinion" className="block text-center text-sm text-[#707070]">
          {type === 'positive' ? 'Descripción positiva:' : 'Descripción negativa:'}
        </label>
        <textarea
          id="opinion"
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          rows={2}
          className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-center">
        <button type="submit" className="bg-[#88C28A] hover:bg-[#76A374] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Enviar
        </button>
        <button type="button" onClick={onCancel} className="ml-2 bg-[#E57373] hover:bg-[#FFCDD2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default OpinionForm;
*/}