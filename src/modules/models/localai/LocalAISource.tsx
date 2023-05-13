import * as React from 'react';
import { FormControl, FormLabel, Input } from '@mui/joy';
import { DModelSourceId } from '@/modules/models/store-models';

// export function LocalAISettings() {
//   const { localAIUrl, setLocalAIUrl } = useSettingsStore(state => ({
//     localAIUrl: state.localAIUrl,
//     setLocalAIUrl: state.setLocalAIUrl,
//   }));
//
//   const handleLocalAIUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setLocalAIUrl(event.target.value);
//   };
//
//   return (
//     <FormControl>
//       <FormLabel>LocalAI API Url</FormLabel>
//       <Input
//         value={localAIUrl}
//         onChange={handleLocalAIUrlChange}
//         placeholder="http://localhost:8080"
//       />
//
//     </FormControl>
//   );
// }

export function LocalAISource(props: { sourceId: DModelSourceId }) {


  return (

    <FormControl>
      <FormLabel>LocalAI API Url</FormLabel>
      <Input
        // value={localAIUrl}
        // onChange={handleLocalAIUrlChange}
        placeholder='http://localhost:8080'
      />

    </FormControl>

  );
}