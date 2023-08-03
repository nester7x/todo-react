import { useQuery } from 'react-query';

import { getCookie } from 'utils/cookieUtils';
import { api } from 'utils/apiUtils';
import { PostProps } from 'types/postTypes';

export function usePosts(apiQuery: string) {
  return useQuery<PostProps[]>({
    queryKey: [`${apiQuery}`],
    enabled: getCookie('token') !== null,
    queryFn: () => {
      const token = getCookie('token');
      return api.get(apiQuery, token);
    },
  });
}
