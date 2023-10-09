import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as UserService from '../services/UserService';

export const useMutationHooks = (fnCallback) => {
  const mutation = useMutation({
    mutationFn: fnCallback,
  });
  return mutation;
};

// export const useCreateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation(
//     async ({ id, rests, access_token }) => {
//       const response = await UserService.updateUser(id, rests, access_token);
//       return response.data;
//     },
//     {
//       onSuccess({ message }) {
//         queryClient.refetchQueries(['userData']);
//       },
//       onError({ response }) {
//         console.log('response', response);
//       },
//     }
//   );
// };
