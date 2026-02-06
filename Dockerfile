FROM mysql:8.0

# Configurar variáveis de ambiente
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=libapp

# Copiar o script SQL de inicialização
COPY database/init.sql /docker-entrypoint-initdb.d/

# Expor a porta padrão do MySQL
EXPOSE 3306
