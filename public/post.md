Ultimamente o Flux vem comquistando um grande publico, tendo como caracteristica nas imagens geradas muito realismo e também consegue seguir muito bem oque é pedido, além do principal, que é um suporte surreal a textos.

## ComfyUI

Primeiramente voce vai baixar o ComfyUI, que é um gerenciador de modulos mais "manual" se comparado a um Automatic1111, porém não se preocupe pois não é nenhum bicho de 7 cabeças. 
Dê uma olhada em [ComfyUI Releases](https://github.com/comfyanonymous/ComfyUI/releases/tag/v0.2.2) e é recomendado que baixe a versão portavel, assim não vai precisar se preocupar com dependencias. A partir dai você pode iniciar usando os arquivos run***.bat, preferencialmente usando a GPU.
## Suporte para modelos GGUF

Essa parte teoricamente é opcional porque você consegue rodar o modelo oficial do Flux sem quaisquer alteração, mas você tem que ter uma GPU consideravelmente boa. Assim por meio do processo de quantização, os modelos no formato GGUF se tornam mais leves para computadores honestos. Dê uma olhada em [ComfyUI-GGUF](https://github.com/city96/ComfyUI-GGUF).

Você vai precisar acionar esse comando dentro da pasta raiz do ComfyUI (aonde se encontram os arquivos run***.bat) para instalar esse modulos GGUF personalizados. 

```cmd
git clone https://github.com/city96/ComfyUI-GGUF ComfyUI/custom_nodes/ComfyUI-GGUF 
.\python_embeded\python.exe -s -m pip install -r .\ComfyUI\custom_nodes\ComfyUI-GGUF\requirements.txt
```

## Baixando Modelos

Voce vai precisar colocar os arquivos dentro das suas respectivas pastas

|Link |Caminho           |Adicional|
|-----|------|------|
|[**flux1-dev GGUF**](https://huggingface.co/city96/FLUX.1-dev-gguf)                         |  ./ComfyUI/models/unet | - |
|[**Clip Models**](https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main)       |  ./ComfyUI/models/clip | São necessários `clip_l` e `t5xxl fp8`|
|[**VAE**](https://huggingface.co/black-forest-labs/FLUX.1-schnell/blob/main/ae.safetensors) |  ./ComfyUI/models/vae  | - |

## Montando o Fluxo

Baixe [Flux.json](./flux.json) e carregue no ComfyUI clicando em `load`, e a partir desse exemplo você pode ajustar tudo a sua preferência.
