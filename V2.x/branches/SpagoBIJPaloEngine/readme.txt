Il template del documento JPalo � del tipo:
	 <olap connection="Mondrian" 
      	 account="admin" 
           view="Sales"
    	   cube="Sales">
	 </olap>
	 
Se nel template si specifica il nome della vista mediante attributo "view", il motore
cercher� di aprire una vista esistente su JPalo.
Se viene specificato 
"cube" = <nome del cubo> , 
"connection" = <nome della connessione al server mondrian>	 
"account" = <login name dell'account da utilizzare per loggarsi al server mondrian>
allora la vista viene creata dinamicamente se non esiste, o aperta quella esistente 
per quel cubo.
Se specificati tutti gli attributi (come nel caso di template generato con SpagoBI), allora
viene cercata la vista corrispondente al nome della vista "view" specificato nel template.
Se si invoca il motore per editare un template, viene aperto JPalo con navigator sulla vista 
specificata nel template con possibilit� di creare una nuova vista ma senza Connections e Accounts e Roles.
Se si apre JPalo per eseguire un documento JPalo di SpagoBI, ed il documento � appena stato creato,
il motore apre la vista salvata in fase di definizione del documento. I salvataggi successivi della vista,
avvengono sotto forma di subobject legati al documento con nome della vista.
Quindi eseguendo un doc JPalo che ha gi� un subobject, viene eseguito il subobject.
 

Classi modificate in SpagoBIJPaloEngine:
JPaloEngineStartServlet (new)
JPaloEngineTemplate (new)
WPaloServiceImpl x apertura viste
CubeViewService  x salvataggio
BasePaloServiceServlet x sessione nuova jpalo
DisplayFlags (aggiunti hide)
AccountNavigatorView
AdminNavigatorView

Modifiche palo-gwt-core:
BasePaloServiceServlet
CubeViewController
CubeViewService
JPaloSavingUtil (new)

palo-xmla:
XMLAClient (errore url lowercase)

SpagoBIProject:
modificato JPaloDriver